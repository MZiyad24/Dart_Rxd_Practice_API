import { IsEmail, IsNotEmpty, MinLength, Matches, IsOptional, MaxLength, Max, Min, } from 'class-validator';
import { isEmpty } from 'rxjs';

export class SignupDto {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @Matches(/^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo|outlook)\.(com|net|org)$/, {
    message: 'Email must be a valid Gmail, Hotmail, Yahoo, or Outlook address with .com, .net, or .org domain',
  })
  email!: string;

  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[0-9])/, {
    message: 'Password must contain at least one number',
  })
  password!: string;

  @IsNotEmpty()
  confirmPassword!: string;

  @IsOptional()
  gender?: string;

  @IsOptional()
  @Min(1, { message: 'Academic level must be at least 1' })
  @Max(4, { message: 'Academic level cannot be greater than 4' })
  level?: number;
}