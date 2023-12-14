<html>
	<head>
		<title>Cat Quiz</title>
		<style>
			body{
				width:100%;
				height:2000px;
				background-color:#11052C;
				text-align:center;
				padding:0px;
				margin:0px;
				color:#FFE459;
				font-family:Monospace;
			}
			hr{
				border:none;
			}
			.baton{
				background-color:lightpink;
				border:2px solid pink;
				border-radius:25px;
			}
			.baton:hover{
				box-shadow: inset 4px 4px 100px -76px rgba(179, 10, 148, 1);
			}
			img{
				width:250px;
				height:250px;
			}
		</style>
	</head>
	<body>
		<center>
				<h2 style="padding:10px;border-bottom:1px solid white;">Zapraszamy do udziału w quizie o kićkach!</h2>
				<form action="" method="post">
					<h3>Wybierz właściwe odpowiedzi!</h3>
					<hr>
					<h4>1. Kot na zdjęciu jest:</h4>
					<img src="https://pbs.twimg.com/media/Ecib9-JXoAESrDs.jpg"><br>
					<input type="radio" id="quiz1-odp1" name="odp-quiz1" value="uroczy">
						<label for="quiz1-odp1">uroczy</label>
					<input type="radio" id="quiz1-odp2" name="odp-quiz1" value="bardzo-uroczy">
						<label for="quiz1-odp2">bardzo uroczy</label>
					<input type="radio" id="quiz1-odp3" name="odp-quiz1" value="niesamowicie-uroczy">
						<label for="quiz1-odp3">niesamowicie uroczy</label><br><br>
					<h4>2. Jakiej rasy jest ten kitek?</h4>
					<img src="https://i.pinimg.com/236x/ed/f2/ad/edf2adf7dc9df3bd7b2b5343fb51aa2a.jpg"><br>
					<input type="radio" id="quiz2-odp1" name="odp-quiz2" value="uroczej">
						<label for="quiz2-odp1">uroczej</label>
					<input type="radio" id="quiz2-odp2" name="odp-quiz2" value="floppa">
						<label for="quiz2-odp2">floppa</label>
					<input type="radio" id="quiz2-odp3" name="odp-quiz2" value="nie-mily">
						<label for="quiz2-odp3">śmigaj mi z tym kociskiem</label><br><br>
					<h4>3. Kiedy obchodzi się święto tego kota?</h4>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4W7mPfI4Ss2KPNOzsG-Tt4lXqoXVai1baA&usqp=CAU"><br>
					<input type="radio" id="quiz3-odp1" name="odp-quiz3" value="groźny">
						<label for="quiz3-odp1">groźny</label>
					<input type="radio" id="quiz3-odp2" name="odp-quiz3" value="jutro">
						<label for="quiz3-odp2">jutro</label>
					<input type="radio" id="quiz3-odp3" name="odp-quiz3" value="piątek">
						<label for="quiz3-odp3">piątek</label>
					<h4>4. Czy przywdziałbyś taką oto koszulkę?</h4>
					<img src="https://ae01.alicdn.com/kf/H05f38e0f55ed41bd968f4c29d705b853s/Big-Floppa-Meme-koszula-dla-kot%C3%B3w-koszulka-damska-koszulka-Oversize-koszulki-Pop-koszula-t-shirty-dla-m%C4%99%C5%BCczyzn-Oversize-koszulka-z-motywem-Anime-Nerdy-tanie-tanio-SHORT-CN-%28pochodzenie%29-COTTON-summer-Na-co-dzie%C5%84-Z-okr%C4%85g%C5%82ym-ko%C5%82nierzykiem-tops-Z-KR%C3%93TKIM-R%C4%98KAWEM-Sukno-Drukuj-Various.jpg_640x640.jpg?lulany"><br>
					<input type="radio" id="quiz4-odp1" name="odp-quiz4" value="tak">
						<label for="quiz4-odp1">tak</label>
					<input type="radio" id="quiz4-odp2" name="odp-quiz4" value="tak">
						<label for="quiz4-odp2">tak</label>
					<input type="radio" id="quiz4-odp3" name="odp-quiz4" value="nje">
						<label for="quiz4-odp3">nje</label>
					<h4>5. Finałowe pytanie: wybierz swojego wojownika!</h4>
					<select name="odp-quiz5" class="baton">
						<option value="nic"></option>
						<option value="opt1">hecker</option>
						<option value="opt2">angry floppa</option>
						<option value="opt3">oramge cat</option>
						<option value="opt4">chomky cat</option>
						<option value="opt5">sleepy cat</option>
					</select>
					<input type="submit" name="fighter-select" value="Wybieram!" class="baton">
					
					<br><br><br><input type="submit" name="submit-quiz-odp" value="Sprawdź quiz!" class="baton">
				</form>
		
		<?php
			if(isset($_POST['submit-quiz-odp'])){
				$quizOdp1 = $_POST['odp-quiz1'];
				if($quizOdp1 == "uroczy") echo "<h5>1. Odpowiedź <b>$quizOdp1</b> jest poprawna!</h5>";
				if($quizOdp1 == "bardzo-uroczy") echo "<h5>1. Odpowiedź <b>$quizOdp1</b> jest poprawna!</h5>";
				if($quizOdp1 == "niesamowicie-uroczy") echo "<h5>1. Odpowiedź <b>$quizOdp1</b> jest poprawna!</h5>";
				//--||--
				$quizOdp2 = $_POST['odp-quiz2'];
				if($quizOdp2 == "uroczej") echo "<h5>2. Odpowiedź <b>$quizOdp2</b> jest poprawna!";
				if($quizOdp2 == "floppa") echo "<h5>2. Odpowiedź <b>$quizOdp2</b> jest poprawna!";
				if($quizOdp2 == "nie-mily") echo "<h5>2. Twoja odpowiedź jest niepoprawna, jesteś cham!";
				//--||--
				$quizOdp3 = $_POST['odp-quiz3'];
				if($quizOdp3 == "piątek") echo "<h5>3. Odpowiedź <b>$quizOdp3</b> jest poprawna!";
				if($quizOdp3 == "jutro") echo "<h5>3. Twoja odpowiedź jest niepoprawna!";
				if($quizOdp3 == "groźny") echo "<h5>3. Twoja odpowiedź jest niepoprawna!";
				//--||--
				$quizOdp4 = $_POST['odp-quiz4'];
				if($quizOdp4 == "tak") echo "<h5>4. Odpowiedź <b>$quizOdp4</b> jest poprawna!";
				if($quizOdp4 == "nje") echo "<h5>4. Odpowiedź <b>$quizOdp4</b> jest niepoprawna, bezgustny odpadzie!</h5>";
				//--||--
				
				
			}
			$quizOdp5 = $_POST['odp-quiz5'];
			if(isset($_POST['fighter-select'])){
					$heckerAttack = rand(4,14);
					$heckerDefense = rand(2,12);
					$heckerStamina = rand(7,12);
					if($quizOdp5 == "opt1") echo "<h5>5. Twój wojownik: hecker<br><br>Attack: $heckerAttack<br><br> Defense: $heckerDefense<br><br>Stamina: $heckerStamina</h5>";
					$floppaAttack = rand(11,20);
					$floppaDefense = rand(14,30);
					$floppaStamina = rand(34,60);
					if($quizOdp5 == "opt2") echo "<h5>5. Twój wojownik: angry floppa<br><br>Attack: $floppaAttack<br><br> Defense: $floppaDefense<br><br>Stamina: $floppaStamina</h5>";
					$oramgeCatAttack = rand(24,35);
					$oramgeCatDefense = rand(1,10);
					$oramgeCatStamina = rand(23,50);
					if($quizOdp5 == "opt3") echo "<h5>5. Twój wojownik: oramge cat<br><br>Attack: $oramgeCatAttack<br><br> Defense: $oramgeCatDefense<br><br>Stamina: $oramgeCatStamina</h5>";
					$chomkyCatAttack = rand(50,65);
					$chomkyCatDefense = rand(1,10);
					$chomkyCatStamina = rand(75,101);
					if($quizOdp5 == "opt4") echo "<h5>5. Twój wojownik: chomky cat<br><br>Attack: $chomkyCatAttack<br><br> Defense: $chomkyCatDefense<br><br>Stamina: $chomkyCatStamina</h5>";
					$sleepyCatAttack = rand(1,5);
					$sleepyCatDefense = rand(1,5);
					$sleepyCatStamina = rand(21,45);
					if($quizOdp5 == "opt5") echo "<h5>5. Twój wojownik: chomky cat<br><br>Attack: $sleepyCatAttack<br><br> Defense: $sleepyCatDefense<br><br>Stamina: $sleepyCatStamina</h5>";
			
			}
		?>
	</center>
	</body>
</html>