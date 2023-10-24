import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {AuthDto} from "./dto/auth.dto";
import {RegisterDto} from './dto/register.dto';

@Controller('auth')
export class AuthController {
    @Post('register')
    async register(@Body() dto: RegisterDto) {

    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {

    }
}
