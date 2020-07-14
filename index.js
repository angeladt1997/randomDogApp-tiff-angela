<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dog API Example</title>
    <link rel="shortcut icon" href="">
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="container">
        <h1>Dog API: A Simple Example</h1>

        <form>
          <input id="textArea" type="text" value="" placeholder="Type in a number!" required>
          <input type="submit" value="Get a dog pic!">
          <button type="button" class="reset-button">Get more pictures!</button>
        </form>
      
        
        <section class="results hidden">
          <h2>Look at this dog!</h2>
        </section>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>
</html>
