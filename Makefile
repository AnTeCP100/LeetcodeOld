CC=gcc
all: helloWord
helloWord: helloWord.o	
	@$(CC) -o $@ $< 
helloWord.o	: helloWord.c	
	@$(CC) -o helloWord.o -c helloWord.c	 	

clean:
	@rm -f *.o *.exe
