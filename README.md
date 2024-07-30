# Installing Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling powerful backend development. Below are the steps to install Node.js on different operating systems.

## Installation Steps

### Windows

1. **Download Node.js**: Visit the [official Node.js website](https://nodejs.org/), and download the Windows Installer (.msi) package.

2. **Run Installer**: Double-click the downloaded `.msi` file to run the installer.

3. **Accept License Agreement**: Click 'Next' and then 'I Agree' to accept the license agreement.

4. **Choose Components**: By default, all components are selected. You can leave them as is or customize the installation by selecting/de-selecting components.

5. **Choose Install Location**: Choose the destination folder for Node.js installation. The default location is usually fine.

6. **Install Node.js**: Click 'Next' and then 'Install' to begin the installation.

7. **Complete Installation**: Once the installation is complete, click 'Finish' to close the installer.

8. **Verify Installation**: Open Command Prompt (cmd) and type `node -v`. You should see the version of Node.js installed.

### macOS

1. **Install Homebrew (if not already installed)**: Open Terminal and run the following command:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js using Homebrew**: In Terminal, run the following command:
    ```bash
    brew install node
    ```

3. **Verify Installation**: After installation, run the below command in Terminal. 
    ```bash
    node -v 
    ```
    You should see the version of Node.js installed.

### Linux (Ubuntu/Debian)

1. **Update Package Index**: Open Terminal and run the following command:

2. **Install Node.js and npm**: Run the following command in Terminal:
    ```bash
     sudo apt install nodejs npm
    ```
3. **Verify Installation**: After installation, run the below command in Terminal. 
    ```bash
    node -v 
    ```
    You should see the version of Node.js installed.

### Other Linux Distributions

For other Linux distributions, you can typically install Node.js using their package manager. For example, on Fedora, you can use `dnf`, and on CentOS, you can use `yum`.

## Steps to Run Branch
npm install
node "filename"


## Conclusion

Hooray! 🎉 You've now got Node.js up and running like a well-oiled machine on your system. Time to unleash your coding creativity and build something amazing! Whether you're crafting sleek web apps or tinkering with server-side magic, Node.js is your trusty sidekick on this coding adventure. So, grab your favourite beverage, put on your coding socks, and let the fun begin! Happy coding! 😄🚀
