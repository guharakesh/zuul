tools:
  pkg.installed:
    - pkgs:
      - vim-enhanced
      - nodejs

mongo:
  prkrepo.managed:
    - name: MongoDB Repository
    - baseurl: http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
    - gpgcheck: 0
    - enabled: 1
  pkg.installed:
    - pkgs:
      - mongodb-org-server
      - mongodb-org-mongos
      - mongodb-org-shell
      - mongodb-org-tools

