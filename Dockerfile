FROM ubuntu:latest
LABEL authors="nyare"

ENTRYPOINT ["top", "-b"]