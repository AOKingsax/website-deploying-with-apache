# website-deploying-with-apache

## 1. Log in into the console

I used a user details with administrative privileges that i created to login and i clicked on EC2

![a1](./pretashop%20image/a1.jpg)

## 2. Create an instance and connect via SSH

I clicked on launch instance

![a2](pretashop%20image/a2.jpg)

I selected an Ubuntu AMI and Ubuntu server 20.04

![a3](pretashop%20image/a3.jpg)

I already have a key pair, so i selected key.pem

![a4](pretashop%20image/a4.jpg)

For security group, i selected lauch wizard -3 which allows inbound SSH, TCP, and HTTP(S)  
The default VPC is used and other configurations are left at default

![a5](pretashop%20image/a5.jpg)

The instance has been successfully created. So i click on the instance ID

![a6](pretashop%20image/a6.jpg)

I click on the instance to display its details

![a7a](pretashop%20image/a7a.jpg)

I click on the button and go to connect

![a7](pretashop%20image/a7.jpg)

I go to SSH client and copy command in the example so i can securely connect to this intance via SSH

![a8](pretashop%20image/a8.jpg)

I open my windows terminal and change directory to where i have the key.pem file

![a9](pretashop%20image/a9.jpg)

I paste the copied ssh command in this folder as the private key is required to securely connect to the instance remotely. I typed yes to continue with the connection as shown.

![a10](pretashop%20image/a10.jpg)

## 3. Setting up configuration of the server and hosting the prestashop website

So i update the server repository to be up to date and upgrade any outdated package

![a11](pretashop%20image/a11.jpg)

I install apache server which controls traffic and serve the webpage

![a12](pretashop%20image/a12.jpg)

I change directory to where the apache webpage is and delete the index.html file there.  
I did this because i don't want to create another dot config file for my website, i still want to use the default apache dot config file.  
I have the website source code on my github already, so i cloned it into the directory

![a13](pretashop%20image/a13.jpg)

This is the content of the source code

![a14](pretashop%20image/a14.jpg)

In order to point the apache server to my source code, i change the root directory on the config file

![a16](pretashop%20image/a16.jpg)

I saved the file and restarted apache2, then check the status to see if it is working properly.
The Active (running) shows my apache webserver is good and has no fault

![a17](pretashop%20image/a17.jpg)

I copied the URL of the instance and pasted on a web browser and it dsplayed the website

![a18](pretashop%20image/a18.jpg)
