-- Project Name : todo-nuxt
-- Date/Time    : 2021/08/07 13:01:54
-- Author       : snakajima
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

/*
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
*/

-- TODO_OBJECT
--* RestoreFromTempTable
create table todo (
  id BIGINT not null AUTO_INCREMENT comment 'id'
  , contents VARCHAR(250) not null comment '内容'
  , create_user VARCHAR(50)  not null comment '作成者'
  , create_at TIMESTAMP not null comment '作成日'
  , delete_at TIMESTAMP comment '削除日'
  , deleted TINYINT(1)  default 0 comment '論理削除'
  , constraint todo_PKC primary key (id)
) comment 'TODO_OBJECT' ;

