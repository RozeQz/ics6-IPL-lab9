# frozen_string_literal: true

require 'application_system_test_case'

# Test system class
class PalindromesTest < ApplicationSystemTestCase
  setup do
    @driver = Capybara.current_session.driver.browser
  end

  test 'checking error message for input with string' do
    @driver.get(root_url)
    @driver.find_element(:id, 'input_number').send_keys('zxcursed?')
    @driver.find_element(:id, 'btn_commit').click
    assert_selector '#input_output', text: 'zxcursed?'
    assert_selector '#error_output', text: 'Некорректный ввод!'
  end

  test 'checking error message for input more than one number' do
    @driver.get(root_url)
    @driver.find_element(:id, 'input_number').send_keys('1 2')
    @driver.find_element(:id, 'btn_commit').click
    assert_selector '#input_output', text: '1 2'
    assert_selector '#error_output', text: 'Некорректный ввод!'
  end

  test 'checking error message for empty input' do
    @driver.get(root_url)
    @driver.find_element(:id, 'btn_commit').click
    assert_selector '#error_output', text: 'Пустой ввод. Введите что-нибудь!'
  end

  test 'checking correct response for n = 100' do
    @driver.get(root_url)
    @driver.find_element(:id, 'input_number').send_keys('100')
    @driver.find_element(:id, 'btn_commit').click
    assert_selector '#input_output', text: '100'
    assert_selector '#answer_output', text: '7'
    squares = [0, 1, 4, 9, 121, 484, 676]
    7.times do |i|
      assert_selector "#square#{i}", text: squares[i].to_s
    end
  end
end
