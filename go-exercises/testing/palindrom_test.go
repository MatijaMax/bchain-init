package testing

import "testing"

func TestCreatePalindromeValid(t *testing.T){
	textExample := "nebojsa"
	correctResult := "nebojsasjoben"
	s, err := createPalindrome(textExample)

	if s != correctResult {
		t.Errorf("CreatePalindrom failed on test example: %s, it returned %s and should return %s", textExample, s, correctResult)
	}
	if err != nil {
		t.Errorf(err.Error())
	}
	t.Logf("CreatePalindrom succeded  on test example: %s, it returned %s and should return %s", textExample, s, correctResult)
	
	textExample = "nan"
	correctResult = "nanan"
	s, err = createPalindrome(textExample)
	if s != correctResult {
		t.Errorf("CreatePalindrom failed on test example: %s, it returned %s and should return %s", textExample, s, correctResult)
	}
	if err != nil {
		t.Errorf(err.Error())
	}
	t.Logf("CreatePalindrom succeded  on test example: %s, it returned %s and should return %s", textExample, s, correctResult)

}

func TestCreatePalindromeEvenLength (t *testing.T) {
	textExample := "nebo"
	_, err := createPalindrome(textExample)
	if err == nil{
		t.Errorf("Function should report error when length of string is an even number")
	}
	t.Logf("CreatePalindrom succeded on test example %s, it returned error: %s", textExample,err.Error())
}