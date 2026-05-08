import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { HealthController } from './firebase/firebase.controller';
import { FirebaseExceptionFilter } from './firebase/firebase.filter';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './module/auth/auth.module';
import { PlacesModule } from './module/places/plcaes.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    FirebaseModule,
    PlacesModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService, FirebaseExceptionFilter],
})
export class AppModule { }
