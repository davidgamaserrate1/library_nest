 import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/Book.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BookService {

    constructor(
        private readonly bookRepository: BookRepository
    ){}
    
    async saveBook(newBook: BookDTO) : Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }
    
    async getAllBooks() : Promise<Book[]> {
        const allBooks =  await this.bookRepository.getAllBooks();

        if (!allBooks.length ) 
             throw new BadRequestException('Não existem livros cadastrados') 
        return allBooks    
    }

    async getBookById(id: String) : Promise<Book> {
        try{            
            return  await this.bookRepository.getBookById(id)  
        }catch(error){

            throw new BadRequestException('Nenhum resultado')
        }
    }


}
