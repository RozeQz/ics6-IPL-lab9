# frozen_string_literal: true

# Controller class
class PalindromeController < ApplicationController
  def input
    render layout: false
  end

  def view
    raise StandardError if params[:n].length.zero?

    @input = Integer(params[:n])
    @numbers = (0..@input).select { |i| palindrome?(i * i) }
    @result = @numbers.size
  rescue ArgumentError
    @error = 'Incorrect input'
  rescue StandardError
    @error = 'You have to enter something'
  ensure
    respond_to do |format|
      format.html
      format.json do
        render json: [{ name: :result, type: @result.class.to_s, value: @result },
                      { name: :numbers, type: @numbers.class.to_s, value: @numbers },
                      { name: :error, type: @error.class.to_s, value: @error }]
      end
    end
  end

  private

  def palindrome?(number)
    number.to_s == number.to_s.reverse
  end
end
