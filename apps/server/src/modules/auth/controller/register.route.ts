import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

import { AccountStatus } from '../account/account.entity';

export const REGISTER_ENDPOINT = '/auth/register';

export class RegisterBody {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class RegisterResponse {
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsEnum(AccountStatus)
  @ApiProperty({ enum: AccountStatus, enumName: 'AccountStatus' })
  status: AccountStatus;

  @IsDateString()
  @ApiProperty()
  createdAt: Date;

  @IsDateString()
  @ApiProperty()
  updatedAt: Date;
}
