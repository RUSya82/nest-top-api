import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {TopPageDocument, TopPageModel} from "./top-page.model/top-page.model";
import {Model} from "mongoose";

@Injectable()
export class TopPageService {
    constructor(
        @InjectModel(TopPageModel.name) private topPageModel: Model<TopPageDocument>
    ) {
    }
}
