import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookDTO } from 'src/DTO/Book.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookService } from 'src/Services/book/book.service';

@Controller('books')
export class BooksController {

    constructor(
        private readonly booksService : BookService
    ) {}

    @Get()
    getAllBooks():string{
        return 'Livros'
    }

    @Post()
    async saveBook(@Body() newBook : BookDTO): Promise<Book> {
        return await this.booksService.saveBook(newBook);
    }

    @Put()
    updateBook():string{
        return 'Livro atualizado'
    }

    @Delete()
    deleteBook():string{
        return 'Livro apagado'
    }
}
