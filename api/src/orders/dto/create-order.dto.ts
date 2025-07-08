import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderItemDTO } from './orderItem/order-item.dto';
import { PaymentDto } from './payment/payment.dto';

export class CreateOrderDTO {
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  userId: number;

  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  storeId: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty({ message: 'Tổng giá trị của đơn hàng không được bỏ trống' })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  total: number;

  @IsOptional()
  note: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDTO)
  items: OrderItemDTO[] = [];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PaymentDto)
  payment: PaymentDto;
}
