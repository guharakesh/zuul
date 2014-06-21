# Bookwork with NodeJS

##Setup

###Windows
####Needed
- Vagrant
- Virtualbox
- Git & Git windows tools (install from [here](http://git-scm.com/download/win))

####Steps
1. Make sure you have a valid github ssh key and that is is stored in `C:\Users\YourUser\.ssh`

2. In that same folder, past the following into `.bashrc`, creating the file if needed:

    ```
        #!/bin/bash
        eval `ssh-agent -s`
        ssh-add
    ```

3. Open git-bash, create a folder, and run, the following:
    - `git clone git@github.com:guharakesh/zuul.git`
    - `vagrant up`
    - `vagrant ssh`

4. You are now in the vagrant machine. Files should be in the `/vagrant/`.
