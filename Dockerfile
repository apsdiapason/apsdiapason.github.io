FROM alpine:3.12.1

RUN apk add --no-cache bash hugo npm git openssh
RUN npm install --global \
    postcss@8.1.0 \
    postcss-cli@8.1.0 \
    tailwindcss@1.8.13 \
    autoprefixer@9.8.6

CMD hugo server -D --disableFastRender
