CC = gcc
FLAG = -std=c99
UP_DIR = ../

MAIN_C = ${wildcard $(UP_DIR)mainTest.c}
MAIN_H=${wildcard $(UP_DIR)method.h}
MAIN_O=$(patsubst %.c,%.o,$(MAIN_C))

NOW_C = ${wildcard *.c}
NOW_O = $(patsubst %.c,%.o,$(NOW_C))

TARGET = mainTest
PATH_TARGET = $(UP_DIR)$(TARGET)

NOW_OBJ = $(MAIN_O) $(NOW_O)

all: mainTest
	@cd ..;
#	@echo "main c path : "$(MAIN_C)
#	@echo "method h path : "$(MAIN_H)
#	@echo "main o path : "$(MAIN_O)
#	@echo "now c path : "$(NOW_C)
#	@echo "now o path : "$(NOW_O)
#	@echo "obj o path : "$(NOW_OBJ)	
	@echo "end"
	

mainTest:$(NOW_OBJ)
	$(CC) $(FLAG)  -o $(PATH_TARGET) $(NOW_OBJ)

$(NOW_O):$(NOW_C) $(MAIN_H)
	$(CC) $(FLAG) -c $(NOW_C)

$(MAIN_O):$(MAIN_C) $(MAIN_H)
	$(CC) $(FLAG) -c $(MAIN_C) -o $(MAIN_O)


clean:
	rm -f $(UP_DIR)*.o $(UP_DIR)*.exe
