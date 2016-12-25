# Install Node.js

[Homepage](https://nodejs.org/)[Github](https://github.com/nodejs/node)

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

All the development are using the LTS (For Current: 6, Boron)

## Windows
Please download the msi file from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Mac
Please use the nvm.
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
touch ~/.bash_profile
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> ~/.bash_profile
source ~/.bashrc
nvm install 6
nvm use 6
```

## Debian and Ubuntu
Please follow the guide of [nodesource](https://github.com/nodesource/distributions/blob/master/README.md#deb)
```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## RHEL and CentOS
Please follow the guide of [nodesource](https://github.com/nodesource/distributions/blob/master/README.md#rpm)
```bash
su
curl -sL https://rpm.nodesource.com/setup_6.x | bash -
yum install -y nodejs gcc-c++ make
```

## Docker Image

Base on `node:6` or `node:6-alpine`