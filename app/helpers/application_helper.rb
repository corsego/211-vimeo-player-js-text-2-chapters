module ApplicationHelper
  def timestamps_to_buttons(text)
    text.gsub(/(\d+:\d+)/) do |match|
      time = match.split(':').map(&:to_i)
      seconds = time[0] * 60 + time[1]
      "<button data-action=\"vimeo#setCurrentTime\" data-time=\"#{seconds}\" style=\"color: blue;\">#{match}</button>"
    end
  end
end
