import { Injectable } from '@nestjs/common'
import { BookDTO } from 'src/DTO/Book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../Interfaces/book.interface';

@Injectable()
export class BookRepository {
    
    constructor(
        @InjectModel('book') private readonly bookModel : Model<Book>
    ){}

    async saveBook(newBook: BookDTO): Promise<Book>{
        const savedbBook =  new this.bookModel(newBook)
        return await savedbBook.save()
    }

}