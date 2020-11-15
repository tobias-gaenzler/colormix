# build with e.g. docker build -t "colormix:1.0" .
# run with e.g. docker run -i -p 8080:8080 colormix:1.0
FROM google/dart

RUN pub global activate webdev && \
    pub global activate stagehand

WORKDIR /app

ADD pubspec.* /app/
RUN pub get
ADD . /app
RUN pub get --offline

EXPOSE 8080

ENTRYPOINT /root/.pub-cache/bin/webdev serve --hostname 0.0.0.0
