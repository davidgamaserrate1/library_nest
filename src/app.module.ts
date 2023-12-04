import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './Services/book/book.service';
import { BookRepository } from './Mongo/Repository/book.repository';
import { BookSchema } from './Mongo/Schemas/book.schema';


const con_mongoDB ="mongodb+srv://davidgamaserrate:dia14dejulho@cluster0.z4oomqh.mongodb.net/?retryWrites=true&w=majority"

@Module({
  imports: [
    MongooseModule.forRoot(con_mongoDB),
    MongooseModule.forFeature([
      {name:'book', schema : BookSchema}
    ])
  ],
  controllers: [BooksController],
  providers: [BookService, BookRepository],
})
export class AppModule {}
