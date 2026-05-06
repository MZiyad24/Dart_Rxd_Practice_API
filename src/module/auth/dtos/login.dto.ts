import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail()
    @Matches(/^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo|outlook)\.(com|net|org)$/, {
        message: 'Email must be a valid Gmail, Hotmail, Yahoo, or Outlook address with .com, .net, or .org domain',
    })
    email!: string;

    @IsNotEmpty()
    @Matches(/^(?=.*[0-9])/, {
        message: 'Password must contain at least one number',
    })
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    password!: string
}