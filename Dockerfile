# build with e.g. docker build -t "colormix:Dockerfile" .
FROM google/dart

RUN pub global activate webdev && \
    pub global activate stagehand

WORKDIR /app

ADD pubspec.* /app/
RUN pub get
ADD . /app
RUN pub get --offline

EXPOSE 8080

ENTRYPOINT ["/root/.pub-cache/bin/webdev","serve"," --hostname 0.0.0.0"]

#ENTRYPOINT ["/bin/bash"]