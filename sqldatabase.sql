CREATE DATABASE 'taskApplication';

CREATE TABLE IF NOT EXISTS `tasks` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `task` varchar(200) NOT NULL,
 `status` int(11) NOT NULL,
 `created_at` int(11) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;