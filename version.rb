# version.rb
Version = File.read('version/version.txt')
msg = """
			Classy
	 	`npm install classy-belt`
	 	--------------------------
		  A posh utility helper
	      Version: `#{Version}`
"""

puts "#{msg}"