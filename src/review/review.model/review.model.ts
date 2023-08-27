import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument,Schema as MSchema, Types} from "mongoose";

import {ProductModel} from "../../product/product.model/product.model";

export type ReviewDocument = HydratedDocument<ReviewModel>;

@Schema()
export class ReviewModel {
    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    rating: number;

    @Prop({type: Date})
    createdAt: Date;

    @Prop({ type: MSchema.Types.ObjectId, ref: ProductModel.name })
    productId: Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);