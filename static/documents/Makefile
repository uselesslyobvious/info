.PHONY: all download clean update_metalink

SIZE ?= stat --format '%s'
MD5 ?= sh -c 'md5sum "$$1" | cut -f 1 -d " "' md5sum
SHA512 ?= sh -c 'sha512sum "$$1" | cut -f 1 -d " "' sha512sum

update_metalink:
	xml sel -N 'm=urn:ietf:params:xml:ns:metalink' -t -v '/m:metalink/m:file/@name' -nl all.meta4 | while read file; do \
		xml ed -S -L -N 'm=urn:ietf:params:xml:ns:metalink' \
			-d '/m:metalink/m:file[@name="'"$${file}"'"]/m:size' \
			-s '/m:metalink/m:file[@name="'"$${file}"'"]' -t elem -n size -v "$$($(SIZE) "$${file}")" \
			-d '/m:metalink/m:file[@name="'"$${file}"'"]/m:hash[@type="md5"]' \
			-s '/m:metalink/m:file[@name="'"$${file}"'"]' -t elem -n hash -v "$$($(MD5) "$${file}")" \
			-i '(/m:metalink/m:file[@name="'"$${file}"'"]/hash)[last()]' -t attr -n type -v md5 \
			-d '/m:metalink/m:file[@name="'"$${file}"'"]/m:hash[@type="sha-512"]' \
			-s '/m:metalink/m:file[@name="'"$${file}"'"]' -t elem -n hash -v "$$($(SHA512) "$${file}")" \
			-i '(/m:metalink/m:file[@name="'"$${file}"'"]/hash)[last()]' -t attr -n type -v sha-512 \
			all.meta4; \
	done
	xml format --indent-spaces 4 all.meta4 > all.meta4.tmp
	mv all.meta4.tmp all.meta4
