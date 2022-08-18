import "./Middle.css"
import { useState } from "react";

const Web = () => {
    return (
        <>
            <div className="web-div">
                <div className="web">
                    <p className="web-1"> {"// npm install piesocket-js"} </p>
                    <p className="web-2">channel.listen("new-tweet", function (data){"{"}</p>
                    <p className="web-3">console.log("new-tweet received": , data);{"}"});</p>
                    
                </div>
            </div>

        </>
    )
}

const Android = () => {
    return (
        <>
            <div className="and-div">
                <div className="and">
                    <p className="and-1">{"val listener = PieSocketListener();"}</p>
                    <p className="and-2">{"val ws: WebSocket = client.newWebSocket("}</p>
                    <p className="and-3">{"request,listener"}</p>
                    <p className="and-4">{");"}</p>
                </div>
            </div>

        </>
    )
}

const Ios = () => {
    return (
        <>
            <div className="ios-div">
                <div className="ios">
                    <p className="ios-1">{"var request = URLRequest(url: URL(string: 'wss://CLUSTER_ID.piesocket.com/v3/'+channelId+'?api_key='+apiKey)!)"}</p>
                    <p className="ios-2">{"socket = WebSocket(request: request)"}</p>
                    <p className="ios-3">{"socket.connect()"}</p>
                </div>
            </div>

        </>
    )
}

const WebSocket = () => {
    return (
        <>
            <div className="web-div">
                <div className="web">
                    <p className="web-1">var channelId = "channel_1";</p>
                    <p className="web-2">"var clusterId = "demo";</p>
                    <p className="web-3">var apiKey = "hidden";</p>
                    <p className="web-4">const webSocketEndopint = {"`"}wss://${"{"}clusterId{"}"}.piesocket.com/v3/${"{"}channelId{"}"}?api_key=${"{"}apiKey{"}"}{"`"}</p>
                </div>
            </div>

        </>
    )
}

const NodeJS = () => {
    return (
        <>
            <div className="nodejs-div">
                <div className="node">
                    <p className="nodejs-1">{"// npm i piesocket-nodejs"}</p>
                    <p className="nodejs-2">piesocket.publish("tweets", "new-tweet" ,{" {" }</p>
                    <p className="nodejs-3">  "text": "Hello PubSub!"</p>  
                    <p className="nodejs-4">{"}"}); </p>
                </div>
            </div>

        </>
    )
}

const Python = () => {
    return (
        <>
            <div className="python-div">
                <div className="python">
                    <p className="python-1">{"// npm i piesocket-nodejs"}</p>
                    <p className="python-2"> "POST", "https://CLUSTER_ID.piesocket.com/api/publish", headers=headers, data = json.dumps({"{" }</p>
                    <p className="python-3"> "message":{ "{"}"text": "Hello world!"{ "}"}</p>  
                    <p className="python-4">{"}"}))</p>
                </div>
            </div>

        </>
    )
}

const Php = () => {
    return (
        <>
            <div className="php-div">   
                <div className="php">
                    <p className="php-1">curl_setopt_array($curl, [CURLOPT_POSTFIELDS {"=>"} [
                        'url' {"=>"} "https://CLUSTER_ID.piesocket.com/api/publish"                                 
                                                 'message' {"=>"} ["text" {"=>"} "Hello world!"]
                                                    ]]);</p>
                </div>
            </div>

        </>
    )
}


const Ruby = () => {
    return (
        <>
            <div className="ruby-div">   
                <div className="ruby">
                    <p className="ruby-1">request = Net::HTTP::Post.new("https://CLUSTER_ID.piesocket.com/api/publish")
                        request["Content-Type"] = "application/json"
                        request.body = {"{"} message: {"{"} "text": "Hello world!" "{"}"}{"}"}.to_json
                        response = https.request(request)</p>
                </div>
            </div>

        </>
    )
}

const Java = () => {
    return (
        <>
            <div className="java-div">   
                <div className="java">
                    <p className="java-1">Request request = new Request.Builder()
    .url("https://CLUSTER_ID.piesocket.com/api/publish")
    .build();
Response response = client.newCall(request).execute();</p>
                </div>
            </div>

        </>
    )
}

const Go = () => {
    return (
        <>
            <div className="go-div">   
                <div className="go">
                    <p className="go-1">payload := strings.NewReader("{"{"}"\"message\": \"Hello world!\"\n{"}"}")
req, err := http.NewRequest(method, "https://CLUSTER_ID.piesocket.com/api/publish", payload)
res, err := client.Do(req)
defer res.Body.Close()</p>
                </div>
            </div>

        </>
    )
}

const Curl = () => {
    return (
        <>
            <div className="curl-div">   
                <div className="curl">
                    <p className="curl-1"># Replace Cluster ID, API key and secret</p>
<p className="curl-2">curl --location --request POST 'https://CLUSTER_ID.piesocket.com/api/publish' \</p>
<p className="curl-3">--header 'Content-Type: application/json' \</p>
<p className="curl-4">--data-raw '{"{"}</p>
<p className="curl-5">"key": "oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm",
    "secret": "d8129f82f8dd71910aa4a7efa30a7297",
    "channelId": "channel_1",
    "message": "Hello world!"
{"}"}'</p>
                </div>
            </div>

        </>
    )
}

const Wget = () => {
    return (
        <>
            <div className="wget-div">   
                <div className="wget">
                    <p className="wget-1"># Replace Cluster ID, API key and secret
wget --no-check-certificate --quiet --method POST --header 'Content-Type: application/json' \
                        --body-data '{"{"}
    "key": "oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm",
    "secret": "d8129f82f8dd71910aa4a7efa30a7297",
    "channelId": "channel_1",
    "message": "Hello world!"
{"}"}' \
   'https://CLUSTER_ID.piesocket.com/api/publish'</p>
                </div>
            </div>

        </>
    )
}
const Middle = () => {

    const [web, setWeb] = useState(true)
    const [android,setAndroid] = useState(false)
    const [ios, setIos] = useState(false)
    const [websocket, setWebsocket] = useState(false)
    const [nodejs, setNodeJs] = useState(true)
    const [python, setPython] = useState(false)
    const [php, setPhp] = useState(false)
    const [ruby, setRuby] = useState(false)
    const [java, setJava] = useState(false)
    const [go, setGo] = useState(false)
    const [curl, setCurl] = useState(false)
    const [wget, setWget] = useState(false)
    return (
        <> 
            
             <div className="middle-text">
               <p className="middle-header"> Integrate With Ease.</p>

               <p className="middle-info">Subscribe with our Client SDKs, and Publish events from the backend.</p>
            </div>
           <div className="info">
                <div className="uptime">
                     <h1 > 99.99%</h1>

                    <h2 >Uptime</h2>
                 </div>
                 <div className="cost_savings">
                     <h1  > 50 % </h1>

                     <h2>Cost Savings</h2>
                 </div>
                 <div className="messages">
                     <h1>10 Billion+</h1>

                     <h2 >Messages Delivered Per Day</h2>
                </div>
            </div>

             <div className="subscribe">
               <h2 className="subscribe-h2">1. Subscribe On The Client.</h2>

               <p className="subscribe-p1">Use PieSocket SDK or a third-party WebSocket client, to subscribe to the realtime channels.</p>
                 
               <p className="subscribe-p2">PieSocket offers direct access to the WebSocket Server API unlike competitors.
                     
            </p>
            </div>
            <div className="publish">
               <h2 className="publish-h2">2. Publish From Server.</h2>

               <p className="publish-p1">Publish messages to subscribed users, using PieSocket Server SDKs or with a POST request from your server.</p>
                 
               <p className="publish-p2">PieSocket supports publishing messages from the Client SDKs as well.
                     
            </p>
            </div>
                 <div>
                <ul className="selector">
                    <li className="selItem" onClick={() => { setWeb(true); setAndroid(false); setIos(false); setWebsocket(false) }}>Web</li>
                    <li className="selItem" onClick={() => { setWeb(false); setAndroid(true); setIos(false); setWebsocket(false) }}>Android</li>
                    <li className="selItem" onClick={() => { setWeb(false); setAndroid(false); setIos(true); setWebsocket(false)  }}>iOS</li>
                    <li className="selItem" onClick={() => { setWeb(false); setAndroid(false); setIos(false); setWebsocket(true) }}>WebSocket Client</li>
                </ul>
            </div>
            <div className="white-">
                <div className="black-1">
                    {nodejs && <NodeJS />}
                    {python && <Python />}
                    {php && <Php />}
                    {ruby && <Ruby />}
                    {java && <Java />}
                    {go && <Go />}
                    {curl && <Curl />}
                    {wget && <Wget />}
                    
                </div>
            </div>
            <div>
                <ul className="selector-2">
                    <li className="selItem2" onClick={() => { setNodeJs(true); setPython(false); setPhp(false); setRuby(false); setJava(false); setGo(false); setCurl(false);  setWget(false)}}>NodeJS</li>
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(true); setPhp(false); setRuby(false); setJava(false); setGo(false); setCurl(false);  setWget(false)}} >Python</li >
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(false); setPhp(true); setRuby(false); setJava(false); setGo(false); setCurl(false);  setWget(false)}}>PHP</li>
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(false); setPhp(false); setRuby(true); setJava(false); setGo(false); setCurl(false);  setWget(false)}}>Ruby</li>
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(false); setPhp(false); setRuby(false); setJava(true); setGo(false); setCurl(false);  setWget(false)}}>Java</li>
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(false); setPhp(false); setRuby(false); setJava(false); setGo(true); setCurl(false);  setWget(false)}}>Go</li>
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(false); setPhp(false); setRuby(false); setJava(false); setGo(false); setCurl(true);  setWget(false)}}>CURL</li>
                    <li className="selItem2" onClick={() => { setNodeJs(false); setPython(false); setPhp(false); setRuby(false); setJava(false); setGo(false); setCurl(false);  setWget(true)}}>WGET</li>
                </ul>
            </div>
            <div className="white-2">
                <div className="black-2">
                    {web && <Web />}
                    {android && <Android />}
                    {ios && <Ios />}
                    {websocket && <WebSocket/>}
                </div>
            </div>
        </>
        
    )
}

export default Middle;