import 'dart:async';

import 'package:flutter/material.dart';
import './models/ChatMessage.dart';

class ChatRoom extends StatefulWidget {
  ChatRoom({Key? key}) : super(key: key);

  @override
  _ChatRoomState createState() => _ChatRoomState();
}

class _ChatRoomState extends State<ChatRoom> {
  List<ChatMessage> messages = [
    ChatMessage("Hello, Will", "receiver"),
    ChatMessage("How have you been?", "receiver"),
    ChatMessage("Hey Hyunse, I am doing fine dude. wbu?", "sender"),
    ChatMessage("ehhhh, doing OK.", "receiver"),
    ChatMessage("Is there any thing wrong?", "sender"),
  ];
  final scrollController = ScrollController();

  @override
  Widget build(BuildContext context) {
    TextEditingController messageController = TextEditingController();
    Timer(
      Duration(seconds: 1),
      () => scrollController.jumpTo(scrollController.position.maxScrollExtent),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text("Chat Room"),
      ),
      body: Stack(
        children: <Widget>[
          ListView.builder(
              controller: scrollController,
              itemCount: messages.length,
              shrinkWrap: true,
              padding: EdgeInsets.only(
                top: 10,
                bottom: 50,
              ),
              itemBuilder: (context, index) {
                return Container(
                  padding: EdgeInsets.all(15),
                  alignment: (messages[index].messageType == "receiver"
                      ? Alignment.topLeft
                      : Alignment.topRight),
                  child: Container(
                    padding: EdgeInsets.all(16),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: (messages[index].messageType == "receiver"
                            ? Colors.grey.shade200
                            : Colors.blue[200])),
                    child: Text(
                      messages[index].messageContent,
                      style: TextStyle(fontSize: 15),
                    ),
                  ),
                );
              }),
          Align(
            alignment: Alignment.bottomLeft,
            child: Container(
                padding: EdgeInsets.only(left: 10, bottom: 10, top: 10),
                height: 60,
                width: double.infinity,
                color: Colors.white,
                child: Row(
                  children: <Widget>[
                    SizedBox(
                      width: 5,
                    ),
                    Expanded(
                      child: TextField(
                        controller: messageController,
                        decoration: InputDecoration(
                          hintText: "Message..",
                          hintStyle: TextStyle(color: Colors.black54),
                          border: InputBorder.none,
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 5,
                    ),
                    FloatingActionButton(
                      onPressed: () {
                        String msg = messageController.text;
                        String type = "receiver";
                        ChatMessage newChat = new ChatMessage(msg, type);
                        setState(() {
                          messages = [...messages, newChat];
                        });
                        scrollController.jumpTo(scrollController.position.maxScrollExtent);
                        messageController.clear();

                      },
                      child: Icon(
                        Icons.send,
                        color: Colors.white,
                        size: 18,
                      ),
                      backgroundColor: Colors.blue,
                      elevation: 0,
                    )
                  ],
                )),
          ),
        ],
      ),
    );
  }
}
