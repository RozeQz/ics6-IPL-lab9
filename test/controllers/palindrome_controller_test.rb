require "test_helper"

class PalindromeControllerTest < ActionDispatch::IntegrationTest
  test "should get input" do
    get palindrome_input_url
    assert_response :success
  end

  test "should get view" do
    get palindrome_view_url
    assert_response :success
  end
end
