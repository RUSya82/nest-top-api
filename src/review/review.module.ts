import {Module} from '@nestjs/common';
import {ReviewController} from './review.controller';
import {ReviewService} from './review.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ReviewModel, ReviewSchema} from "./review.model/review.model";
import {ProductModel, ProductSchema} from "../product/product.model/product.model";

@Module({
    controllers: [ReviewController],
    providers: [ReviewService],
    imports: [
        MongooseModule.forFeature([
            {
                name: ReviewModel.name,
                schema: ReviewSchema
            },
            {
                name: ProductModel.name,
                schema: ProductSchema
            }
        ])
    ]
})
export class ReviewModule {

}
