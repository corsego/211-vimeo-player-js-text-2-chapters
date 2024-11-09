json.extract! post, :id, :vimeo_id, :description, :created_at, :updated_at
json.url post_url(post, format: :json)
