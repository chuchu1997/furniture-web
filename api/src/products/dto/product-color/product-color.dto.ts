import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class ProductColorDto {
  @IsOptional()
  @IsInt({ message: 'ID của Product phải là Number !!! ' })
  @Transform(({ value }) => (isNaN(Number(value)) ? undefined : Number(value)))
  id: number;
  @IsNotEmpty({ message: 'Tên không được để trống!' })
  name: string;

  @IsNotEmpty({ message: 'Hex color không được để trống !' })
  hex: string;

  @IsOptional()
  @IsNumber({}, { message: 'Giá phải là một số!' })
  price?: number;

  @IsNotEmpty({ message: 'Số lượng không được để trống!' })
  @IsNumber({}, { message: 'Số lượng phải là một số!' })
  @Min(0, { message: 'Số lượng phải lớn hơn hoặc bằng 0!' })
  stock: number;
}
