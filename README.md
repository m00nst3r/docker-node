# Docker for node

### Using alpine 

link to tutorial [https://nodejs.org/en/docs/guides/nodejs-docker-webapp/](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

To run application with arguments you should use this command:

    # docker run -e FOO="hello world!" -p 49160:8080 -d user/new-app