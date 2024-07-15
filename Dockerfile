FROM node:18.19.1-slim

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 并安装依赖
COPY package.json ./
RUN npm install

# 复制项目文件
COPY . .

# 启动应用
CMD ["node", "main.js"]