1) **What's the meaning of #!/bin/bash at the top of each script?**

- There are multiple shells in Unix system - Bash is one of them.
  -  When you write a script, you have the option to specify which shell environment can be used
  - #!/bin/bash is you telling your system to use default shell. Bash is the command interpreter.



2) **Learn about what a shell is, and in your own words, describe it pretty briefly. The 'bash' and 'sh' shell are not the same thing. Look into why and why not. **

- Shell: Interface between a user and operating system to access to its OS services. It can either be GUI or CLI.

- sh: (Bourne shell) programming language described by POSIX standard. Shell command line interpreter for Unix/Unix like OS. Provides some built in commands.

- bash: (Bourne Again SHell) Shell replacement of Bourne shell. Superset of sh. 

- **Big Differences**: 

  - If you run your script with sh <scriptname> or run it with <scriptname> and have #!/bin/sh in shebang line, you should expect POSIX sh behavior
  - If you run script with Bash <scriptname>, expect Bash behavior
  - Bash started as sh-compatible implementation. It's more of a dialect of POSIX shell language. Supports --POSIX switch, which makes it more POSIX compliant. 

  **SH**

  - (SHell)
  - Is a specific shell
  - A command interpreter and a programming language
  - Predecessor of Bash

  **BASH**

  - (Bourne-Again-Shell)
  - Is a specific shell
  - a command interpreter and a programming language
  - has sh functionality and more
  - successor of sh
  - Bash is the default shell

  

[https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash#:~:text=Bash%20(Bourne%20again%20shell)%20is,replacement%20for%20the%20Bourne%20shell.&text=Bash%20supports%20sh.,actually%20a%20POSIX%20compliant%20shell](https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash#:~:text=Bash (Bourne again shell) is,replacement for the Bourne shell.&text=Bash supports sh.,actually a POSIX compliant shell).







