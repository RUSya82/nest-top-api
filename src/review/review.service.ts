import {Body, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ReviewDocument, ReviewModel} from "./review.model/review.model";
import {Model} from "mongoose";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Schema as MSchema, Types} from "mongoose";

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(ReviewModel.name) private reviewModel: Model<ReviewDocument>
    ) {}

    async create(dto: CreateReviewDto):Promise<ReviewModel >{
        return this.reviewModel.create(dto)
    }

    async delete(id: string) : Promise<ReviewModel | null>{
        return this.reviewModel.findByIdAndDelete(id).exec();
    }
    async findByProductId(productId: string):Promise<ReviewModel[]>{
        return this.reviewModel.find({productId: new Types.ObjectId(productId)}).exec();
    }
    async deleteByProductId(productId: string) {
        return this.reviewModel.deleteMany({productId: new Types.ObjectId(productId)}).exec();
    }
}
