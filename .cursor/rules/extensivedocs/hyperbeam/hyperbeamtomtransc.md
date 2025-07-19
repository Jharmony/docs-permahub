WEBVTT

1
00:00:00.000 --> 00:00:04.161
<v 0>Okay, let's get started with some HyperBeam basics.</v>

2
00:00:04.742 --> 00:00:08.781
Once you've, cloned the repo and installed all the dependencies,

3
00:00:08.781 --> 00:00:12.709
you can run HyperBeam with rebar.

4
00:00:12.709 --> 00:00:17.630
So we'll go ahead and say rebar 3 as

5
00:00:17.630 --> 00:00:22.342
genesis wasm and

6
00:00:22.342 --> 00:00:27.098
shell. And that's it. That'll start up HyperBeam in a Erlang

7
00:00:27.098 --> 00:00:30.008
shell, so we can start to play around with it.

8
00:00:30.627 --> 00:00:34.524
One of the, core building blocks of HyperBeam is understanding messages,

9
00:00:34.524 --> 00:00:37.802
and messages in Erlang is a map.

10
00:00:37.877 --> 00:00:42.163
So, a message is a map,

11
00:00:42.248 --> 00:00:45.851
which is a, a crutch sign,

12
00:00:46.735 --> 00:00:49.241
curly brace, closed curly brace,

13
00:00:49.294 --> 00:00:53.762
and that is kind of your start of a map.

14
00:00:53.964 --> 00:00:58.352
Now, the map needs properties,

15
00:00:58.352 --> 00:01:00.681
and each property has values,

16
00:01:00.681 --> 00:01:02.846
so let's generate,

17
00:01:02.984 --> 00:01:05.981
like, a very simple,

18
00:01:06.396 --> 00:01:11.208
Thank you. very simple hyper beam message

19
00:01:11.208 --> 00:01:15.771
resolution, so we will start with just one

20
00:01:15.771 --> 00:01:19.838
message, and that message will have a path on it,

21
00:01:20.838 --> 00:01:23.246
and that path will go to hello,

22
00:01:24.496 --> 00:01:28.669
and then on that message which we will have a key called hello.

23
00:01:28.669 --> 00:01:33.808
And that key will say,

24
00:01:35.076 --> 00:01:38.840
with a binary, hello hyperbeam,

25
00:01:39.840 --> 00:01:41.956
alright, okay,

26
00:01:41.956 --> 00:01:46.600
that is our message, and now we want to resolve

27
00:01:46.600 --> 00:01:51.232
that message, so we are going to say HBAO

28
00:01:51.232 --> 00:01:56.805
resolve. message,

29
00:01:56.805 --> 00:01:59.264
and then we are going to pass in some empty ops,

30
00:01:59.886 --> 00:02:03.859
so this is like the most simplest message you can do on hyperbeam,

31
00:02:04.567 --> 00:02:08.444
so we will resolve message, and pass in empty ops,

32
00:02:08.864 --> 00:02:12.239
and we get an okay back, and hello hyperbeam,

33
00:02:13.139 --> 00:02:15.675
easy peasy. So, now,

34
00:02:15.675 --> 00:02:18.255
what we really want to do with hyperbeam,

35
00:02:18.255 --> 00:02:22.808
is have a base message, and a new

36
00:02:22.808 --> 00:02:26.617
message, and we want to resolve those to create,

37
00:02:26.845 --> 00:02:30.402
we call message three, or the resulting message.

38
00:02:31.402 --> 00:02:36.055
we can do that. Very simple example to break

39
00:02:36.055 --> 00:02:39.072
this message up, is we can say,

40
00:02:39.072 --> 00:02:41.443
message one, equals, hello, hello hyperbeam. Alright,

41
00:02:42.778 --> 00:02:47.398
so that's our message one.

42
00:02:53.542 --> 00:03:04.180
and then our message two will be path,

43
00:03:04.180 --> 00:03:06.804
hello. Very simple,

44
00:03:06.804 --> 00:03:11.826
right? And then we're going to just do HBAO resolve.

45
00:03:12.432 --> 00:03:15.696
I'm going to take message one, message two,

46
00:03:15.696 --> 00:03:20.136
and some empty ops, and we get the same result,

47
00:03:20.136 --> 00:03:22.490
right? So we took message one,

48
00:03:22.644 --> 00:03:27.600
message two, combine them together to get message three,

49
00:03:27.600 --> 00:03:32.886
which the result is a binary of hello hyperbeam.

50
00:03:33.886 --> 00:03:37.951
Pretty cool, but very simple.

51
00:03:37.951 --> 00:03:39.076
So let's,

52
00:03:39.086 --> 00:03:43.767
explore some of the complexity of Hyperbeam using the

53
00:03:43.767 --> 00:03:47.662
Lua device. So devices are ex,

54
00:03:47.698 --> 00:03:52.327
executable modules of execution.

55
00:03:53.119 --> 00:03:53.613
They're,

56
00:03:53.624 --> 00:03:56.421
they're really basically state resolution machines.

57
00:03:56.421 --> 00:04:01.519
So basically they take in some state and they have functions

58
00:04:01.519 --> 00:04:04.920
that resolve that state. state into a new set of state.

59
00:04:05.400 --> 00:04:08.902
So there's really not a great word for that.

60
00:04:08.913 --> 00:04:13.476
you know, components and modules and things like that have been overdone,

61
00:04:13.476 --> 00:04:14.788
but basically they're state,

62
00:04:14.788 --> 00:04:18.035
resolution units called hyperbeam devices.

63
00:04:18.195 --> 00:04:22.918
So a hyperbeam device is a set of functions that take

64
00:04:22.918 --> 00:04:27.609
in some sort of state and return a new state of

65
00:04:27.609 --> 00:04:30.355
that. And in this case, we're going to do,

66
00:04:30.366 --> 00:04:34.375
use a Lua device, which takes in some state,

67
00:04:34.375 --> 00:04:34.769
which,

68
00:04:34.779 --> 00:04:36.432
it will create a,

69
00:04:36.443 --> 00:04:39.972
Lua instance inside the Lua VM,

70
00:04:40.142 --> 00:04:42.328
and then allow you to send messages,

71
00:04:42.328 --> 00:04:45.410
essentially execute those functions.

72
00:04:45.421 --> 00:04:47.329
defined in there. And,

73
00:04:47.339 --> 00:04:50.325
yeah, it's, it's really,

74
00:04:50.325 --> 00:04:50.901
really fun.

75
00:04:50.912 --> 00:04:55.994
so let's go ahead and define a Lua message.

76
00:04:56.994 --> 00:04:58.399
And you can see on this,

77
00:04:58.410 --> 00:05:03.613
right-hand side of the screen, We got the Lua

78
00:05:03.613 --> 00:05:07.851
message already typed out. So that will hopefully save some time.

79
00:05:08.491 --> 00:05:12.041
And basically the message is a map.

80
00:05:12.222 --> 00:05:17.596
It has a device set to Lua 5.3,

81
00:05:17.596 --> 00:05:20.944
and then a module, and it's got some Lua scripts.

82
00:05:20.944 --> 00:05:25.481
So instead of, we'll just hand write

83
00:05:25.481 --> 00:05:29.266
this script or paste it in really quick.

84
00:05:29.266 --> 00:05:34.266
Let's

85
00:05:38.956 --> 00:05:40.519
do it this way. So we'll create our Lua script, and the Lua script

86
00:05:40.519 --> 00:05:40.551
is

87
00:05:53.335 --> 00:05:56.619
pretty straightforward.

88
00:05:56.619 --> 00:06:01.331
It's a hello function that returns hello world and an add function

89
00:06:01.331 --> 00:06:04.997
that takes two numbers and adds them together.

90
00:06:05.876 --> 00:06:10.965
Cool. And now let's define our Lua

91
00:06:10.965 --> 00:06:11.487
message.

92
00:06:24.415 --> 00:06:26.909
And it's got the device and the module and the body as the Lua

93
00:06:26.909 --> 00:06:31.479
script. So we've got our Lua message.

94
00:06:31.479 --> 00:06:35.983
And what we want to do is we

95
00:06:35.983 --> 00:06:37.619
want to resolve,

96
00:06:37.629 --> 00:06:41.575
the hello message. Path. So let's do that.

97
00:06:42.575 --> 00:06:47.355
Say Lua message and let's go ahead and

98
00:06:47.355 --> 00:06:49.727
give it a message. So we'll say path

99
00:06:58.577 --> 00:07:03.176
and then we'll pass in some empty ops and we should get

100
00:07:03.176 --> 00:07:05.251
hello world. Cool.

101
00:07:05.612 --> 00:07:09.488
Now if we want to resolve the add function,

102
00:07:09.488 --> 00:07:14.557
right? So HBAO resolve

103
00:07:14.557 --> 00:07:25.976
Lua message. Add

104
00:07:25.976 --> 00:07:28.440
and we'll pass some parameters and then empty objects.

105
00:07:45.787 --> 00:07:46.288
Six.

106
00:07:46.299 --> 00:07:50.937
yeah, so, so that's, that's really kind of the core

107
00:07:50.937 --> 00:07:52.301
of AO. We have this,

108
00:07:52.311 --> 00:07:53.292
base message,

109
00:07:53.292 --> 00:07:56.192
and then we have messages that we want to,

110
00:07:56.203 --> 00:08:00.985
essentially resolve with the base message to get a

111
00:08:00.985 --> 00:08:01.694
near result.

112
00:08:01.705 --> 00:08:05.426
one of the other interesting. Things with Lua is,

113
00:08:05.437 --> 00:08:07.777
in a, in HyperVim is,

114
00:08:07.777 --> 00:08:11.226
is being able to, to handle error handling,

115
00:08:17.485 --> 00:08:18.382
be able to handle errors. So let's just quickly, um, show a demo of

116
00:08:18.382 --> 00:08:23.995
that real quick. We'll take this error script.

117
00:08:23.995 --> 00:08:31.741
We'll paste

118
00:08:31.741 --> 00:08:36.701
that here. And we'll

119
00:08:36.701 --> 00:08:41.765
create a new base

120
00:08:42.038 --> 00:08:56.800
function. Okay,

121
00:08:56.800 --> 00:08:57.431
now,

122
00:08:57.441 --> 00:09:00.599
if we call the success,

123
00:09:00.809 --> 00:09:03.318
good function, we'll get a success,

124
00:09:03.656 --> 00:09:06.003
and if we call the bad function,

125
00:09:06.003 --> 00:09:09.319
we should get an error with the stack trace.

126
00:09:09.319 --> 00:09:13.686
Let's just call the bad function.

127
00:09:14.409 --> 00:09:16.415
Oops, thought

128
00:09:23.376 --> 00:09:24.817
I copied it.

129
00:09:35.382 --> 00:09:38.550
And then, details,

130
00:09:39.550 --> 00:09:42.155
hbaoresolve,

131
00:09:43.197 --> 00:09:45.219
and we'll pass in our,

132
00:09:45.230 --> 00:09:50.417
base, and the function we

133
00:09:50.417 --> 00:09:55.843
want to call, and empty ops and

134
00:09:55.843 --> 00:09:57.963
yeah we get an error,

135
00:09:58.308 --> 00:10:01.343
and we get a nice stack trace on that error.

136
00:10:03.138 --> 00:10:05.583
Pretty cool, so it's a full,

137
00:10:05.593 --> 00:10:07.033
full virtual machine. We can,

138
00:10:07.044 --> 00:10:11.717
execute code inside HyperBeam and get responses back with this

139
00:10:12.179 --> 00:10:14.255
by using just messages.

140
00:10:15.255 --> 00:10:17.627
Real quick. Oh,

141
00:10:17.627 --> 00:10:22.336
well, probably do this in another video

142
00:10:22.383 --> 00:10:24.998
of going through the, the complex messages,

143
00:10:25.270 --> 00:10:30.089
but, but that should get you started. And also I'll include this tutorial markdown

144
00:10:30.089 --> 00:10:34.093
for you to follow, but that should give you an idea of how to

145
00:10:34.093 --> 00:10:34.567
use,

146
00:10:34.578 --> 00:10:39.589
HB resolve with messages and with the Lua device.s