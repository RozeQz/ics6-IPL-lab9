# frozen_string_literal: true

require 'test_helper'

# Test controller class
class PalindromeControllerTest < ActionDispatch::IntegrationTest
  test 'should get input' do
    get palindrome_input_url
    assert_response :success
  end

  test 'should get view' do
    get palindrome_view_url
    assert_response :success
  end

  test 'schoud get json respond' do
    get "#{palindrome_view_url}.json", xhr: true, params: { n: '30' }
    assert_equal '[{"name":"result","type":"Integer","value":7},{"name":"numbers","type":"Array","value":[0,1,2,3,11,22,26]},{"name":"error","type":"NilClass","value":null}]',
                 @response.body
    assert_equal 'application/json', @response.media_type
    response = JSON.parse(@response.body)
    response.map do |objects|
      case objects[:name]
      when 'result'
        assert_equal objects[:type], 'Integer'
        assert_equal objects[:value], '7'
      when 'numbers'
        assert_equal objects[:type], 'Array'
        assert_includes objects[:value], '0 1 2 3 11 22 26'
      when 'error'
        assert_equal objects[:type], 'NilClass'
        assert_nil objects[:value]
      end
    end
    puts response
  end
end
