---
title: "커맨드 모음"
description: ""
date: "2023-02-27T10:00:00.000Z"
category: "develop"
published: true
---

# SSH 
## 비밀번호 없이 로그인하기

```shell
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/authorized_keys

ssh-keygen -t rsa
ssh-copy-id id@server -p22 
scp ~/.ssh/id_rsa.pub [user]@[host]:~/.ssh/authorized_keys
```

## ssh tunneling 
```shell
ssh {REMOTE_HOST} -L 5900:localhost:5900 -p 22
```


# 웹페이지 로딩 시간 측정 

```shell
curl -o /dev/null -s -w '%{time_total}' <URL>
```

# PyEnv
```shell
pyenv install -list
pyenv global 3.6.0
pyenv versions
```


# rsync 


# pm2
```shell
pm2 start --name "{MYNAME}" npm -- run server-test
```

```shell
pm2 delete <process_id>
pm2 stop <process_id>
```

```shell
pm2 startup
pm2 save
pm2 unstartup
```

# NVM

```shell
nvm install --lts
nvm use --lts
nvm alias default system
```

# nano
```shell
파일 끝으로 이동: ^wv
라인삭제 ^k
```


# 스핑크스 검색엔진

한글 인덱싱 

[관련 링크](https://blog.iramine.com/entry/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84-%EC%8A%A4%ED%95%91%ED%81%AC%EC%8A%A4-Sphinx-%EB%8F%84%EC%9E%85)

```
charset_table = 0..9, A..Z->a..z, _, a..z,U+AC00..U+D7A3,U+1100..U+1159,U+1161..U+11A2,U+11A8..U+11F9,U+0021..U+002F,U+003A..U+0040,U+005B..U+0060,U+007B..U+007E 
ngram_chars = U+AC00..U+D7A3
```

```mysql
CREATE TABLE `search_table` (
  `id` bigint(20) unsigned NOT NULL,
  `weight` int(11) NOT NULL,
  `query` varchar(3072) NOT NULL,
  `group_id` int(11) DEFAULT NULL,
  KEY `query` (`query`(1024))
) ENGINE=SPHINX DEFAULT CHARSET=utf8;
```

```
[mysqld]
character-set-server = utf8
skip-character-set-client-handshake

max_connections = 4096
key_buffer_size = 1024M
#max_allowed_packet = 512M
max_allowed_packet = 512M
table_open_cache = 2048
#sort_buffer_size = 32M
sort_buffer_size = 64M
join_buffer_size = 64M
read_buffer_size = 64M
thread_cache_size = 120
read_rnd_buffer_size = 64M
myisam_sort_buffer_size = 128M

query_cache_size = 4096M
query_cache_type = 1
default-storage-engine=InnoDB

innodb_buffer_pool_size = 24G
innodb_buffer_pool_instances = 16
open-files-limit = 8192
tmp_table_size = 4G
max_heap_table_size = 4G
innodb_read_io_threads = 64
innodb_write_io_threads = 64

thread_concurrency = 8

slow_query_log = 1
slow_query_log_file = /var/log/mysql-slow.log
long_query_time=3

#wait_timeout = 28800
wait_timeout = 600
lock_wait_timeout = 600
innodb_lock_wait_timeout = 600

skip-name-resolve
skip-external-locking
```

# rsync
```shell
rsync -avh /Volumes/wd4tb01/ /Volumes/wd4tb02/
rsync -avh --delete --ignore-errors --exclude=".Trashes" --exclude=".Spotlight-V100" /Volumes/wd4tb03/ /Volumes/wd4tb04/
rsync -avh --delete --ignore-errors --exclude=".Trashes" --exclude=".Spotlight-V100" /Volumes/wd4tb01/ /Volumes/wd4tb02/
rsync -avzh root@[host]:/disk2/ /Volumes/wd4tb04/
```

# 많은 파일 복사
```shell
find /dir/from -type f -name "*.swf" -exec cp {} /dir/to
```

# ffmpeg
```shell
ffmpeg -loop 1 -i /mnt/preview.png -threads 2 -n -i /example.swf -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 "/example.mp4”;
    
ffmpeg -loop 1 -i /0.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p /example.mp4
    
    
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
    
ffmpeg -loop 1 -i /example.jpg -y -i /example.mp3 -c:a aac -b:a 128k -c:v libx264 -shortest -strict -2 -pix_fmt yuv420p -vf scale=360:-2 /example.mp4
```

# b2, wasabi

### rclone

```
rclone sync /from_dir wasabi:[host]/to_dir -v
```

### wasabi

```
export AWS_PROFILE=wasabi
aws s3 sync /from_dir s3://[host]/to_dir

```

### b2

```
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
b2 sync /from_dir b2://to_dir
b2 sync --compareVersions size --replaceNewer /from_dir b2://to_dir

```


# MongoDB
### admin
```shell
db.createUser({ user: "admin", pwd: "", roles: [ { role: "dbAdmin", db: "dbname" },{ role: "readWrite", db: "dbname" }]})
```

### backup
```shell
mongodump -host 127.0.0.1 -port 27017
-username admin -password "pwd"
-db dbname -authenticationDatabase dbname
```

### restore
```shell
mongorestore -host 127.0.0.1 -port 27017
-username admin -password "pwd"
-authenticationDatabase dbname ~/dump/
```
### migration
```shell
db.copyDatabase("fromdbname", "todbname", "host", "admin", "pwd", "SCRAM-SHA-1");
```
