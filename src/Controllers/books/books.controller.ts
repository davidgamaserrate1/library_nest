import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from 'src/DTO/Book.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookService } from 'src/Services/book/book.service';

@Controller('books')
export class BooksController {

    constructor(
        private readonly booksService : BookService
    ) {}

    @Get()
    getAllBooks(): Promise<Book[]>{
        return this.booksService.getAllBooks();
    }

    @Get(':bookID')
    async getBookById(@Param('bookID') bookId: string): Promise<Book>{
        return await this.booksService.getBookById(bookId)
    }

    @Post()
    async saveBook(@Body() newBook : BookDTO): Promise<Book> {
        return await this.booksService.saveBook(newBook);
    }

    @Put(':bookID')
    updateBook(@Param('bookID') bookID : string, @Body() newBook: BookDTO) {
        return this.booksService.updateBookById(bookID, newBook)
    }

    @Delete(':bookID')
    async deleteBookById(@Param('bookID') bookID:string) {
        return  await this.booksService.deleteBookById(bookID)
    }
}
