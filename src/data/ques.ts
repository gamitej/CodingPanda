const data = {
  data: {
    question: {
      content:
        '<p>You are given a <strong>sorted</strong> array <code>nums</code> of <code>n</code> non-negative integers and an integer <code>maximumBit</code>. You want to perform the following query <code>n</code> <strong>times</strong>:</p>\n\n<ol>\n\t<li>Find a non-negative integer <code>k &lt; 2<sup>maximumBit</sup></code> such that <code>nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k</code> is <strong>maximized</strong>. <code>k</code> is the answer to the <code>i<sup>th</sup></code> query.</li>\n\t<li>Remove the <strong>last </strong>element from the current array <code>nums</code>.</li>\n</ol>\n\n<p>Return <em>an array</em> <code>answer</code><em>, where </em><code>answer[i]</code><em> is the answer to the </em><code>i<sup>th</sup></code><em> query</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,1,3], maximumBit = 2\n<strong>Output:</strong> [0,3,2,3]\n<strong>Explanation</strong>: The queries are answered as follows:\n1<sup>st</sup> query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.\n2<sup>nd</sup> query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.\n3<sup>rd</sup> query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.\n4<sup>th</sup> query: nums = [0], k = 3 since 0 XOR 3 = 3.\n</pre>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,4,7], maximumBit = 3\n<strong>Output:</strong> [5,2,6,5]\n<strong>Explanation</strong>: The queries are answered as follows:\n1<sup>st</sup> query: nums = [2,3,4,7], k = 5 since 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7.\n2<sup>nd</sup> query: nums = [2,3,4], k = 2 since 2 XOR 3 XOR 4 XOR 2 = 7.\n3<sup>rd</sup> query: nums = [2,3], k = 6 since 2 XOR 3 XOR 6 = 7.\n4<sup>th</sup> query: nums = [2], k = 5 since 2 XOR 5 = 7.\n</pre>\n\n<p><strong class="example">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1,2,2,5,7], maximumBit = 3\n<strong>Output:</strong> [4,3,6,4,6,7]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>nums.length == n</code></li>\n\t<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= maximumBit &lt;= 20</code></li>\n\t<li><code>0 &lt;= nums[i] &lt; 2<sup>maximumBit</sup></code></li>\n\t<li><code>nums</code>\u200b\u200b\u200b is sorted in <strong>ascending</strong> order.</li>\n</ul>\n',
      mysqlSchemas: [],
      dataSchemas: [],
    },
  },
};

const sqlData = {
  content:
    '<p>Table: <code>Tweets</code></p>\n\n<pre>\n+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| tweet_id       | int     |\n| content        | varchar |\n+----------------+---------+\ntweet_id is the primary key (column with unique values) for this table.\nThis table contains all the tweets in a social media app.\n</pre>\n\n<p>&nbsp;</p>\n\n<p>Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is <strong>strictly greater</strong> than <code>15</code>.</p>\n\n<p>Return the result table in <strong>any order</strong>.</p>\n\n<p>The result format is in the following example.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> \nTweets table:\n+----------+-----------------------------------+\n| tweet_id | content                           |\n+----------+-----------------------------------+\n| 1        | Let us Code                       |\n| 2        | More than fifteen chars are here! |\n+----------+-----------------------------------+\n<strong>Output:</strong> \n+----------+\n| tweet_id |\n+----------+\n| 2        |\n+----------+\n<strong>Explanation:</strong> \nTweet 1 has length = 11. It is a valid tweet.\nTweet 2 has length = 33. It is an invalid tweet.\n</pre>\n',
  mysqlSchemas: [
    "Create table If Not Exists Tweets(tweet_id int, content varchar(50))",
    "Truncate table Tweets",
    "insert into Tweets (tweet_id, content) values ('1', 'Let us Code')",
    "insert into Tweets (tweet_id, content) values ('2', 'More than fifteen chars are here!')",
  ],
  dataSchemas: [
    "data = [[1, 'Let us Code'], [2, 'More than fifteen chars are here!']]\ntweets = pd.DataFrame(data, columns=['tweet_id', 'content']).astype({'tweet_id':'Int64', 'content':'object'})",
  ],
};
