import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as admin from 'firebase-admin';
import { ValidationPipe } from '@nestjs/common';
import { FirebaseExceptionFilter } from './firebase/firebase.filter';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const db = admin.firestore();
  db.settings({ ignoreUndefinedProperties: true });
  app.useGlobalFilters(new FirebaseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, 
    transform: true, 
  }));
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
