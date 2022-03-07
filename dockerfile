# base 운영채재를 선택한다.
FROM ubuntu:20.04
WORKDIR /usr/local/projects
# 이제 여기서 넥스트 셋팅을 해보자
# 일단 깃을 설치하고 깃에서 git repo에 접근한뒤 스크립트를 실행해보자.
RUN apt update && api install -y git && git clone git@github.com:temcolabs/guhada_mobile.git -yes