import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty({ message: 'Email không được để trống ' })
  @IsEmail({}, { message: 'Email không đúng định dạng ' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password: string;
}
