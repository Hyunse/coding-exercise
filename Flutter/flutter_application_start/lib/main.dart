import 'package:flutter/material.dart';
import 'package:flutter_application_start/home_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  TextEditingController _usernameController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              width: 35,
              height: 35,
              child: Image.asset('assets/flutter_logo_dark.png'),
            ),
            Padding(
              padding: EdgeInsets.only(left: 50, right: 50, bottom: 10),
              child: TextFormField(
                controller: _usernameController,
                style: (TextStyle(color: Colors.black, fontSize: 22)),
                cursorColor: Colors.black,
                decoration: InputDecoration(
                    hintText: "Input Username",
                    border: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.black)),
                    focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.black))),
              ),
            ),
            Padding(
              padding: EdgeInsets.only(left: 50, right: 50, bottom: 10),
              child: TextFormField(
                controller: _passwordController,
                obscureText: true,
                style: (TextStyle(color: Colors.black, fontSize: 22)),
                cursorColor: Colors.black,
                decoration: InputDecoration(
                    hintText: "Input Password",
                    hintStyle: TextStyle(fontSize: 22),
                    border: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.black)),
                    focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.black))),
              ),
            ),
            Container(
                width: MediaQuery.of(context).size.width / 1.3,
                height: 50,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(35.0),
                  color: Colors.amber,
                ),
                child: MaterialButton(
                  onPressed: () {
                    print('Username: ' + _usernameController.text);
                    print('Password: ' + _passwordController.text);

                    // rotue me
                    Navigator.push(context, MaterialPageRoute(builder: (context) => HomePage()));
                  },
                  child: Text("Press Me"),
                ))
          ],
        ),
      ),
    );
  }
}
