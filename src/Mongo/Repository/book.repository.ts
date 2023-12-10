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
    
    async getAllBooks(): Promise<Book[]>{        
        return await this.bookModel.find({}, {__v: false}).sort({name : +1}).exec()
    }
   
    async getBookById(id: String): Promise<Book>{        
        return await this.bookModel.findById(id, {__v: false})
    }

    async updateBookById(bookID: string, newBook: BookDTO){     
        return await this.bookModel.findByIdAndUpdate({_id: bookID}, newBook)
    }

    async deleteBookById (bookID: string)   {        
        return await this.bookModel.findOneAndDelete( {_id: bookID} )
    }

}