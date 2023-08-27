import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import * as request from 'supertest';
import {AppModule} from '../src/app.module';
import {CreateReviewDto} from "../src/review/dto/create-review.dto";
import {disconnect, Types} from "mongoose";

const productId = '6041f7a3b3e24b1e15e98d38';// new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
    name: "TEST2",
    title: 'Header test',
    description: 'TEST description',
    rating: 5,
    productId
}

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let createdId: string;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/review/create (POST)', async () => {
        let {body}: request.Response = await request(app.getHttpServer())
            .post('/review/create')
            .send(testDto)
            .expect(201)
            // .then(({ body }: request.Response) => {
                createdId = body._id;
                expect(createdId).toBeDefined();
                // done();
            // })
    });
    it('/review/byProduct/:productId (GET)', async () => {
        return request(app.getHttpServer())
            .get('/review/byProduct/' + productId)
            .expect(200)
            .then(({ body }: request.Response) => {
                expect(body.length).toBeGreaterThan(1);

            })
    });
    it('/review/:id (DELETE)',  () => {
        return request(app.getHttpServer())
            .delete('/review/' + createdId)
            .expect(200);

    });
    afterAll(() => {
        disconnect();
    })
});
